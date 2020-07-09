wasm test app

export PATH=/usr/local/opt/llvm/bin:$PATH
clang --target=wasm32 --no-standard-libraries -Wl,--export-all -Wl,--no-entry -o add.wasm test.cpp