function recursiva(max = 0) {
    console.log(max);
    if(max >= 10360) return;
    max++
    recursiva(max);
}
recursiva(10);