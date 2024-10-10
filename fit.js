let s = 1;

function apply() {
    previous.disabled = (s==1);
    next.disabled = (s==3);

    stage1.style.display = (s==1) ? 'block' : 'none';
    stage2.style.display = (s==2) ? 'block' : 'none';
    stage3.style.display = (s==3) ? 'block' : 'none';
}

next.addEventListener("click", () => {
    s++;
    apply()
});

previous.addEventListener("click", () => {
    s--;
    apply()
});

apply();
