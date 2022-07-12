![](src/static/logo.png)

[![](https://img.shields.io/github/workflow/status/arn-all/milady-docs/CI?label=docs%20build&style=for-the-badge)](https://arn-all.github.io/milady-docs/)

## Contents

This repository hosts the documentation of the Milady software package.

## Local build instructions

### Setup Python environment

Deactivate any conda or virtual environment that could be activated, and do: 

```bash
python -m venv env 
source env/bin/activate
pip install -r src/requirements.txt
```

### Build and show in browser

```
cd src 
make -B html
python3 -m http.server -d build/html
firefox http://0.0.0.0:8000/
```
