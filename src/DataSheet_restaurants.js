/*import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_restaurants extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.
    
    item = {};
    this.items.push(item);
    item['img_Name'] = "Tamar";
    item['document_key'] = "VeThun4IJXNQXwcqNvl7";
    item['img_URL'] = "https://images-na.ssl-images-amazon.com/images/I/516Y1L0Y0HL._SX466_.jpg";
    item['img_Number'] = "3042422335";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['img_Name'] = "Mackie";
    item['document_key'] = "eS6Q97Hs6sfqLeAI1tCr";
    item['img_URL'] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qd82v4AsbM5lwLzdxqf4rtN8Ns1crezRnjJM6ov8oJHErDnH";
    item['img_Number'] = "304-222-2000";
    item.key = key++;
  }

  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  
  addItem(item, options) {
    console.log("add to firebase: ", item);
      
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
      
    collection.add(item)
      .then((docRef) => {
        console.log("Firebase document added with id: ", docRef.id);
        item.document_key = docRef.id;
        //super.addItem(item, options);
      
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }
  
  removeItem(item, options) {
    //super.removeItem(item, options);
    
    console.log("delete from firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  
  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);
    
    console.log("update in firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.update(item)
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  

}
*/