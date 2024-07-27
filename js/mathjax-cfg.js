(function() {
    // if (window.location.pathname == "/") return;

    window.MathJax = {
        loader: {
            load: ['[custom]/xypic.js', '[tex]/physics', '[tex]/textcomp'],
            paths: {
                // custom: 'https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build',
                custom: '/js',
            }
        },
        tex: {
            packages: {'[+]': ['physics', 'xypic', 'xcolor', 'amsmath', 'configmacros', 'textcomp']},
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            macros: {
                // environments
                Align: ["\\begin{align*} #1 \\end{align*}", 1],
                Cases: ["\\begin{cases} #1 \\end{cases}", 1],
                
                // parenthese
                lr: ["\\left<#1\\right>", 1],
                itvLr: ["\\left[\\left. #1 \\right)\\right.", 1],
                itvlR: ["\\left(\\left. #1 \\right]\\right.", 1],
                
                // constants
                i: "\\mathrm{i}",
                e: "\\mathrm{e}",
                
                // special sets
                N: "\\mathbb{N}",
                Z: "\\mathbb{Z}",
                Q: "\\mathbb{Q}",
                R: "\\mathbb{R}",
                C: "\\mathbb{C}",
                H: "\\mathbb{H}",
                
                // operators
                T: "^{\\sf T}",
                tr: "\\mathop{\\rm tr}",
                im: "\\mathop{\\rm im}",
                Arg: "\\mathop{\\rm Arg}",
                sgn: "\\mathop{\\rm sgn}",
                diag: "\\mathop{\\rm diag}",
                rank: "\\mathop{\\rm rank}",
                supp: "\\mathop{\\rm supp}",
                argmin: "\\mathop{\\rm argmin}",
                argmax: "\\mathop{\\rm argmax}",
                rhs: "\\mathop{\\rm RHS}",
                lhs: "\\mathop{\\rm LHS}",
                
                // colors
                orange: ["{\\color[rgb]{1.0,.50,.00} #1}", 1],
                green:  ["{\\color[rgb]{.00,.70,.30} #1}", 1],
                pink:   ["{\\color[rgb]{1.0,.00,.60} #1}", 1],
                blue:   ["{\\color[rgb]{.11,.53,.86} #1}", 1],
                cyan:   ["{\\color[rgb]{.36,.89,.89} #1}", 1],
                purple: ["{\\color[rgb]{.61,.04,.62} #1}", 1],
                lime:   ["{\\color[rgb]{.47,.88,.08} #1}", 1],
                yellow: ["{\\color[rgb]{1.0,.93,.00} #1}", 1],
            }
        },
        svg: {
            fontCache: 'global'
        }
    };

    // var mathJaxScr = window.document.createElement("script");
    // mathJaxScr.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    // mathJaxScr.async = true;
    // window.document.body.appendChild(mathJaxScr);

})();