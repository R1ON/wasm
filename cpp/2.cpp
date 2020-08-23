#include <string>

#include <emscripten/bind.h>

using namespace emscripten;

const std::string hello = "Hello";

std::string helloTennisi(std::string name) {
    return hello + " " + name;
}

EMSCRIPTEN_BINDINGS() {
    constant("hello", hello);
    function("helloTennisi", &helloTennisi);
}


//#include <string.h>

//extern "C" {
//    int test() {
//        return 42;
//    }
//
//    char const * hello(char const * name) {
//        char const * test = "Hello";
//
//        return test;
//    }
//}