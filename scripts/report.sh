#!/bin/env

# Reg-cli
# https://github.com/oblador/loki/issues/76

if [ -z "$(ls -A $PWD/.loki/current)" ]; then
   yarn reg-cli $PWD/.loki/reference $PWD/.loki/reference $PWD/.loki/difference --report $PWD/packages/grin-loki/index.html --json $PWD/packages/grin-loki/reg.json
else
   yarn reg-cli $PWD/.loki/current $PWD/.loki/reference $PWD/.loki/difference --report $PWD/packages/grin-loki/index.html --json $PWD/packages/grin-loki/reg.json
fi

open $PWD/packages/grin-loki/index.html
