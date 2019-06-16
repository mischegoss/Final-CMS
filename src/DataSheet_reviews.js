/*import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_reviews extends DataSheetBase {

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
    item['document_key'] = "2XGVxV2jFkJrHIHBa0NZ";
    item['img_URL'] = "data:image/png;base64,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";
    item['img_Number'] = "13322079252";
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