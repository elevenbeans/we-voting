# compile resource file
echo '\033[0;32;1m######################\033[0m'
echo '\033[0;32;1mcompiling resource ...\033[0m'
echo '\033[0;32;1m######################\033[0m'

npm run build

# watch resource file
echo '\033[0;32;1m#####################################################\033[0m'
echo '\033[0;32;1mfinished compiling, now start server and watching ...\033[0m'
echo '\033[0;32;1m#####################################################\033[0m'

echo '\033[0;33;1msee it in http://localhost:8088\033[0m'

npm run server &

npm run watch
