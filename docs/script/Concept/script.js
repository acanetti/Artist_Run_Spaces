console.log('script');
$(document).ready(function(){
    draw_graph('graph_concept_projet',1);
    draw_graph('graph_word_concept_final',2);
    wordcloud('concept_wordcloud',1);
    parametre_concept_pro();
    parametre_concept_words();
});
