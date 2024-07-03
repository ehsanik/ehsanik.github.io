#!/bin/bash
python freeze.py
cp -r build/*.html .
rm -rf build