const n = 0;
$(document).ready(_ => show(n));
let show = n => {
    $(`.tree:eq(${n})`).fadeTo(100, 1, _ => {
        n++;
        const svgLen = $(".tree").length;
        if (n < svgLen) show(n);
    });
};