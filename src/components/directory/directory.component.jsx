import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import Menuitem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
      {
          sections.map(({ id ,...otherSectionProps}) => (
            <Menuitem key={id} {...otherSectionProps} />
          // this.state.sections.map(({title , imageUrl , id , size , linkUrl}) => (
          //     <Menuitem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
          ))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
  
export default connect(mapStateToProps)(Directory);