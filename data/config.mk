# From http://clarkgrubb.com/makefile-style-guide#prologue
MAKEFLAGS += --warn-undefined-variables
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail
.DEFAULT_GOAL := all
.DELETE_ON_ERROR:
.SUFFIXES:

# # Variables specific to this build
# PG_HOST="localhost"
# PG_USER="ilidb"
# PG_DB="ilidb"
# PG_PORT="5432"
