let s = 1;

function apply() {
    previous.disabled = (s==1);
    next.disabled = (s==7);

    stage1.style.display = (s==1) ? 'block' : 'none';
    stage2.style.display = (s==2) ? 'block' : 'none';
    stage3.style.display = (s==3) ? 'block' : 'none';
    stage4.style.display = (s==4) ? 'block' : 'none';
    stage5.style.display = (s==5) ? 'block' : 'none';
    stage6.style.display = (s==6) ? 'block' : 'none';
    stage7.style.display = (s==7) ? 'block' : 'none';
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
