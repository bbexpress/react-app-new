import React from 'react'
import { useState } from 'react'

export default function Radio() {
    const [content, setContent] = useState("");

    

    return (
        <div>
            <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" 
                          checked={this.state.selectedOption === 'option1'} 
                          onChange={this.handleOptionChange} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" 
                          checked={this.state.selectedOption === 'option2'} 
                          onChange={this.handleOptionChange} />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" 
                          checked={this.state.selectedOption === 'option3'} 
                          onChange={this.handleOptionChange} />
            Option 3
          </label>
        </div>
      </form>

        </div>
    )
}
