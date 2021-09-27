export default function About(props) {

    // style={{backgroundColor: props.mode === 'dark'?'#1a3a53':'white', color: props.mode === 'dark'?'white':'black'}}
  
    return (
        <>
        <div className = "container p-3">
            <h1 style={{color: props.mode === 'dark'?'white':'black'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={{backgroundColor: props.mode === 'dark'?'#1a3a53':'white', color: props.mode === 'dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#1a3a53':'white', color: props.mode === 'dark'?'white':'black'}}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, coonvert your text to uppercase and many more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark'?'#1a3a53':'white', color: props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#1a3a53':'white', color: props.mode === 'dark'?'white':'black'}}>
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark'?'#1a3a53':'white', color: props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#1a3a53':'white', color: props.mode === 'dark'?'white':'black'}}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
