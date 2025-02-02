
import React from 'react';


export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',
    };

    let textStyle = {
        color: props.mode === 'dark' ? 'black' : 'white',
    };

   

    let sectionHeadingStyle = {
        border: `2px solid ${props.mode === 'dark' ? 'black' : 'white'}`,
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
        display: 'inline-block',
       
    };

    return (
        <div className='container' style={textStyle}>
            
           

            {/* About StringStudio Section */}
            <center><h2 className='my-4' style={sectionHeadingStyle}>About StringStudio</h2></center>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>StringStudio gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or time to read your text.</strong>
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>StringStudio is a free character counter tool that provides instant character count & word count statistics for a given text. StringStudio reports the number of words and characters. Thus it is suitable for writing text with word/character limits.</strong>
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, and Opera. It suits counting characters in Facebook, blogs, books, Excel documents, PDFs, essays, etc.</strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add empty space after accordion */}
            <div style={{ marginTop: '2rem' }}></div>
        </div>
    );
}
