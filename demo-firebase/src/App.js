import {Firebase} from './firebase/config'

function App() {
  return (
    <div className="App">
        {/* <button onClick={()=>{
         Firebase.firestore().collection('products').add({
          name:'MI',
          price:1200
         })
        
      }}>Click me</button> */}

      <button onClick={()=>{
         Firebase.firestore().collection('products').get().then(snapshot=>{
              snapshot.forEach((obj)=>{
                console.log(obj.data());
              })
         });
        
      }}>Click me</button>
{/* 
<button onClick={()=>{
         Firebase.firestore().collection('products').doc('id').set({
          name:'updated'

         })
      }}>Click me</button> */}

{/* <button onClick={()=>{
         Firebase.firestore().collection('products').doc('id').delete().then(()=>{
          console.log('Deleted');
         })
        
      }}>Click me</button> */}
    </div>
  );
}

export default App;
