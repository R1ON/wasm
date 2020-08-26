#include <string>

#include <emscripten.h>
#include <emscripten/bind.h>

using namespace emscripten;

//#include <string.h>

//extern "C" {
//    char const * hello(char const * name) {
//        char const * test = "Hello";
//
//        return test;
//    }
//}

const std::string hello = "Hello";

std::string helloTennisi(std::string name) {
    return hello + " " + name;
}

EMSCRIPTEN_BINDINGS() {
    constant("hello", hello);
    function("helloTennisi", &helloTennisi);
//    function("getJustNumber", &getJustNumber);
//    function("getJustString", &getJustString);
}

//int getJustNumber() {
//    int jsValue = emscripten_run_script_int("justNumber");
//    return jsValue;
//}
//
//std::string getJustString() {
//    std::string jsValue = emscripten_run_script_string("justString()");
//    return jsValue;
//}
