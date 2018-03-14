# -*- coding: UTF-8 -*-
# language: de
# ----------------------------------------------------------------------------
# STEPS:
# ----------------------------------------------------------------------------
from behave import given, when, then

@given('wir haben "behave" installiert')
def step_impl(context):
    context.execute_steps(u"Angenommen we have behave installed")

@when('wir einen Test implementieren')
def step_impl(context):
    context.execute_steps(u"Wenn we implement a test")

@then(u'wird "behave" ihn für uns testen!')
def step_impl(context):
    context.execute_steps(u'Dann behave will test it for us!')