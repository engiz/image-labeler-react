import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Annotator } from './Annotator';


const Component: React.FC = (props) => {
  const [defaultSceneType, setDefault] = useState(undefined);
  const [url, setUrl] = useState("https://www.petihtiyac.com/Data/Blog/13.jpg");

  return (
    <div>
      <div style={{
        height: 100,
        width: 100,
        backgroundColor: 'black',
      }} onClick={()=>{
        if (defaultSceneType === undefined){
          setTimeout(()=>{
            setUrl("");
            setDefault('3');
          }, 500);
        } else {
          setTimeout(()=>{
            setUrl("https://www.petihtiyac.com/Data/Blog/13.jpg");
            setDefault(undefined);
          }, 500);
        }
      }}/>
      <Annotator
        height={600}
        width={600}
        imageUrl={url}
        asyncUpload={async (labeledData) => {
          // upload labeled data
          console.log(labeledData);
        }}
        types={['A', 'B', 'Cylinder']}
        defaultLabel={'Selectme'}
        defaultType={""}
        sceneTypes={['1', '2', '3']}
        defaultSceneType={defaultSceneType}
        style={{
          width: 640,
          height: 680,
          margin: "20px auto",
          position: "relative",
          backgroundColor: "#368",
          borderRadius: 8,
          padding: 10
        }}
        defaultBoxes={[{
          x: 316,
          y: 305,
          w: 65,
          h: 61,
          annotation: 'A',
          label: 'ses',
        }]}
        disableAnnotation={false}
      />
    </div>
  )
};

ReactDOM.render(
  <Component />,
  document.body
);

module.hot.accept();