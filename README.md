WebAssembly test app.

АКТИВИРУЙ ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ:
cd ../emsdk
source ./emsdk_env.sh

em++ --bind cpp/2.cpp -s WASM=1 -O3 -o public/2.js


em++ cpp/1.cpp -s WASM=1 -O3 -s EXPORTED_FUNCTIONS="['_doubling']" -o public/1.wasm
