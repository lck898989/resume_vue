export const modifyAName = (state,name)=>{
    console.log("state is ",state);
    console.log("name is ",name);
    state.name = name;
}
export const modifyBName = (state,name)=>{
    state.name = name;
}