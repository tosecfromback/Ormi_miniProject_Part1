
let text_ready = {
    kwd : '',
    title : '',
    author : '',
    publisher : '',
};

export function book_input(kwd, ttl, ath, pbl){
    text_ready.kwd = kwd.value.replace(/ /g,'');
    text_ready.title = ttl.value.replace(/ /g,'');
    text_ready.author = ath.value.replace(/ /g,'');
    text_ready.publisher = pbl.value.replace(/ /g,'');
    temp_result_list(text_ready);
}