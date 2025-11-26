(function() {
    // if (window.location.pathname == "/") return;

    // Version 2025.11
    window.MathJax = {
        loader: {
            load: ['[custom]/xypic.js', '[tex]/physics', '[tex]/textcomp', '[tex]/mathtools'],
            paths: {
                // custom: 'https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build',
                custom: '/js',
            }
        },
        tex: {
            packages: {'[+]': ['physics', 'xypic', 'xcolor', 'amsmath', 'configmacros', 'textcomp', 'mathtools']},
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
                T: "^{\\mathsf{T}}",
                tr: "\\operatorname{tr}",
                im: "\\operatorname{im}",
                Arg: "\\operatorname{Arg}",
                sgn: "\\operatorname{sgn}",
                diag: "\\operatorname{diag}",
                rank: "\\operatorname{rank}",
                supp: "\\operatorname{supp}",
                argmin: "\\mathop{\\mathrm{arg\\,min}}",
                argmax: "\\mathop{\\mathrm{arg\\,max}}",
                rhs: "\\mathrm{RHS}",
                lhs: "\\mathrm{LHS}",
                
                // colors
                red   : ["{\\color[rgb]{1.00,0.35,0.35} #1 }", 1],
                orange: ["{\\color[rgb]{1.00,0.60,0.20} #1 }", 1],
                yellow: ["{\\color[rgb]{0.95,0.90,0.19} #1 }", 1],
                lime  : ["{\\color[rgb]{0.52,0.88,0.18} #1 }", 1],
                green : ["{\\color[rgb]{0.28,0.70,0.46} #1 }", 1],
                cyan  : ["{\\color[rgb]{0.34,0.85,0.85} #1 }", 1],
                blue  : ["{\\color[rgb]{0.26,0.60,0.86} #1 }", 1],
                purple: ["{\\color[rgb]{0.64,0.33,0.65} #1 }", 1],
                pink  : ["{\\color[rgb]{0.95,0.66,0.84} #1 }", 1],
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