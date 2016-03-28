VPATH = raw:finished_files:build
include config.mk

GENERATED_FILES = ''

.PHONY: all clean full_clean

clean:
	rm -Rf build/*

full_clean:
	rm -Rf build/*
	rm -Rf finished_files/*

all:
	@echo "Nothing to build here yet"

# ilidb.csv:
# 	wget -O "tmp/interpreter_registry_03262016.csv" \
# 	  "https://docs.google.com/spreadsheets/d/1p56GDvSkSXo2TSwyH4kzIWkhCzwNfs6usOh-W5K_Nhk/pub?gid=0&single=true&output=csv" > build/$@
#

ilidb.xlsx:
	wget -O "tmp/interpreter_registry_03262016.xlsx" \
	  "https://docs.google.com/spreadsheets/d/1p56GDvSkSXo2TSwyH4kzIWkhCzwNfs6usOh-W5K_Nhk/pub?output=xlsx" > build/$@
