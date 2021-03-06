import uuid from 'react-native-uuid';
import realm from './Realm';

export default class LabelItem {
  static create = (title?, color?) => {
    title = title || '';
    color = color || '#FFF';
    return realm.create('Label', {
      id: uuid.v4(),
      title: title,
      color: color,
    });
  };
}

LabelItem.schema = {
  name: 'Label',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string?',
    color: { type: 'string', default: '#ff0000' },
  },
};