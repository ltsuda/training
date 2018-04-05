#!/bin/sh
# . /etc/bash_completion
port=2001
user=e7support
pass=admin
cmd2='exit'

# list of devices (IP)
hosts=() 

# removing log file to ensure the command output is the current one
if [ -f "log.txt" ]; then
rm log.txt
fi

echo ''
echo ''
echo -e "\e[0;41mHELPER:\e[0m"
echo ''
echo -e "\e[0;32mshow vlan YOURVLAN                    --->>>>  Displays the VLAN Detail \e[0m"
echo "show vlan YOURVLAN members            --->>>>  Displays what VLANs are members of ports/ERPS"
echo "show interface YOUR-IF vlans          --->>>>  Show VLANs on an interface"
echo "show mac addr xx:xx:xx:xx:xx:xx       --->>>>  Show where are the Learned MAC Addresses"
echo "show version                          --->>>>  Show Version of all E7s"
echo ''
echo -n "Enter the Command that you want to run in all E7s from the XC: "
echo ''

# read user input
read -e 'cmd1'

# Iterate through all XC hosts and perform the command user typed
for i in ${hosts[@]}; do
  echo "${i} -"
done

echo ''
let count=${#hosts[@]}+1
echo -en "\033[s\033[${count}A"

for i in ${hosts[@]}; do
  echo -e "\033[1A"
  echo -n "${i} - Collecting Data... "
  (echo open ${i}
  sleep 1
  echo ${user}
  sleep 1
  echo ${pass}
  sleep 1
  echo ${cmd1}
  sleep 2
  echo ${cmd2}
  ) | telnet >> log.txt
  echo -e "\033[1A\033[68C - Done!"
done

echo ''
echo ''
echo -e "\e[0;92m\n------------------ RESULTS  ------------------\e[0m\n"

# variable to save XC device's IP to show later
xcip=""
erps=()
# Check if command is "show vlan VLAND_ID members"
# if command isn't the command above, perform cat on the entire file
# if command matches the command above, perform the following procedure:
# - Read log.txt file line by line
# - if line starts with "Connected to", save it to "xcip" variable subtracting only IP information, then continue to next line on file
# - if next line doesn't start with "Connected to" go to second "if" / if line has "Ethernet" and "membership"/"native VLAN"/"tag-action, print xcip + current line
# - if line has "master_ring"/"ERPS domain", push variable "xcip" (IP information) to erps array
# note: command tr -s " " translates a line removing multiple spaces with a single space " "
#if [[ $cmd1 =~ "show vlan"* && $cmd1 =~ "members" ]] ; then
if [[ ($cmd1 =~ ^"show vlan" && $cmd1 =~ "members"$) && $cmd1 != "show vlan members" ]] ; then
    echo -e "\e[0;92mYour VLAN is present on these XC ports \e[0;37m(\e[0;33mif empty, it isn't associated with any port\e[0;37m):\e[0m\n"
    while read line; do
        if [[ $line =~ "Connected to"* ]] ; then
            #xcip=${line%.*}
            xcip=( $(echo "${line}" | grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}') )
            continue
        fi
        if [[ $line =~ Ethernet && $line =~ membership|"native VLAN"|"tag-action"  ]] ; then
            echo "${xcip}: ${line}" | tr -s " "
        fi
        if [[ $line =~ "master_ring"|"ERPS domain" ]] ; then
            erps+=("${xcip}")
        fi
    done <log.txt

    # Comparing erps array with hosts: hosts - erps
    # Compares if values is missing on erps array: which XC device your VLAN is not present as master_ring/ERPS domain
    notERPS=()
    for i in "${hosts[@]}"; do
        skip=
        for j in "${erps[@]}"; do
            # if value on hosts == value on erps (left operation is true), skip=1 and break loop
            # note:  value is an IP address
            # note: "&&" operator specifies which side to perfom if left-side test is true: true=perform left / false=perform right
            [[ $i == $j ]] && { skip=1; break; }
        done
        # if $skip lengh is different than 0 (non-zero) - (left operation is false), so perform right side: push IP to notERPS array
        # note: "||" operator specifies which side to perfom if left-side test is false:
        [[ -n $skip ]] || notERPS+=("$i")
    done

    # if "notERPS" array lengh is different than 0 (non-zero) then print XX devices' IP line by line
    if [[ -n $notERPS ]] ; then
            echo ''
            echo -e "\e[0;30;41mYour VLAN isn't a member of ERPS on these XC devices:\e[0m\n"
            for device in "${notERPS[@]}"; do
                    echo -e "${device}"
            done
    else
            echo ''
            echo -e "\e[0;30;42mSucess: Your VLAN is present on all XC devices as ERPS/master_ring\e[0m\n"
    fi
else
 cat log.txt
fi

echo -e "\e[0;92m\n----------------------------------------------\e[0m\n"
echo ''
echo '---------------- Removing log file ----------------'
rm log.txt

#exit 0

echo ''
echo ''
echo -e "\e[0;31mEND OF XC SCRIPT\e[0m"
echo ''
