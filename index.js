import {micromark} from 'micromark'
import {gfm, gfmhtml} from 'micromark-extension-gfm'

$(document).ready() {
    const urlParams = new URLSearchPParams(window.location.search));
    var page = urlParams.get('page')
    console.log(page)
    if(!page){
        page = 'index.md'
    }

    try {
        $.get(page, function(pagedata) {
            $('#corpus-content').html(micromark(pagedata, 
                                              {allowDangerous: true, 
                                               extensions: [gfm()],
                                               htmlExtensions: [gfmHtml()]}
            ))
        })
    } catch(err) {
        console.log(err.message)
    }
}
