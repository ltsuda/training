FROM mysql

RUN apt-get update && apt-get install -y apache2

ADD app-docker/ /var/www/html

COPY app-docker/ /var/www/html/app/

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]