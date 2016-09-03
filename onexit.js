/**
 * Created by stefan on 02.10.15.
 * Copyright (c) 2015 Stefan Trost
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function() {
    /**
     * Add css to head
     */
    var link = document.createElement('link');
    link.href = 'onexit.css';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.media = 'screen';

    document.head.appendChild(link);

    /**
     * Async. get html for pop up
     */
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "onexit.html", true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr);
                var onexit = document.createElement('div');
                onexit.setAttribute('class', 'hide');
                onexit.setAttribute('id', 'onexit');
                onexit.innerHTML = xhr.response;
                document.body.appendChild(onexit);
                /**
                 * Event handling
                 */
                var seen = false;
                document.documentElement.addEventListener('mouseleave', function (e) {
                    if (e.pageY - window.pageYOffset <= 0 && !seen) {
                        onexit.classList.remove("hide");
                        seen = true;
                    }
                });

                var closeBtn = document.getElementById('onexit-close-btn');
                closeBtn.addEventListener('click', function () {
                    onexit.classList.add("hide");
                });
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);

})();
