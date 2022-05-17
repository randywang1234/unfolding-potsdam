import './App.css';
import Map from './Map';
import React,{useState} from 'react';

function App() {

  const[content, setContent] =useState([])
  const[hidden, setHidden] =useState(false)
  // const[close, setClose] = useState(false)
  console.log(content)


  const onClick=()=>{
    setHidden(!hidden)
  }



  return (
    <>
    <div className="App">
      <div className='nav'>
        <div className="nav-pic">
          <img alt="Fhp_logo" src="./picture/FHP.png"></img>
        </div>  
        {/* <div className="nav-text"> */}
          <p>Unfolding Potsdam — Multiple Perspectives on German Policy and Culture</p>
        {/* </div> */}
      </div>

         <Map content={content} setContent={setContent} setHidden={setHidden} hidden={hidden}/>
         { hidden &&
        <div className='diary'>
          <p>{content.diarytitle}</p>
          <span className='first'><b>Q: </b>{content.diaryquestion}</span>
          <span className='second'><b>A: </b>{content.diary}</span>
          <div className='image'>
            <img alt={content.picture.picture1detail} src={content.picture.picture1}></img>
            <span>{content.picture.picture1detail}</span>
          </div>
          <div className='image'>
            <img alt={content.picture.picture2detail} src={content.picture.picture2}></img>
            <span>{content.picture.picture2detail}</span>
          </div>
          <div className='image'>
            <img alt={content.picture.picture3detail} src={content.picture.picture3}></img>
            <span>{content.picture.picture3detail}</span>
          </div>
          <img alt="" src="./picture/cross.png" className='delete' onClick={onClick}/>
        </div>
        }
        { hidden &&
        <div className='intro'>
          <img  alt={content.name} src={content.namepicture}/>
          <a className='title' href={content.link}>{content.name}</a> <br /> <span>{content.address}</span>.
        </div>
        }
        <p className='myself'>PROJECT BY / <a href="https://github.com/randywang1234">Randy Wang</a></p>
        
      </div>

    
      </>
  );
}

export default App;
