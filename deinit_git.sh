#!/bin/bash

# Setze das Root-Verzeichnis, in dem du starten möchtest
root_dir="/home/oliverkirsch/hyperskill_projects_extract"

# Durchlaufe alle Unterverzeichnisse und entferne das .git-Verzeichnis
find "$root_dir" -type d -name ".git" -exec rm -rf {} \;

