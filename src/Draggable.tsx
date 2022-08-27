import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { constants } from '@test137e29b/smooth-dnd';
const {
	wrapperClass
} = constants;

export interface DraggableProps {
	render?: () => React.ReactElement;
	className?: string;
  children?: React.ReactNode;
}

class Draggable extends Component<DraggableProps> {
	public static propsTypes = {
		render: PropTypes.func,
		className: PropTypes.string,
	}

	render() {
		if (this.props.render) {
			return React.cloneElement(this.props.render(), { className: wrapperClass });
		}
		
		const clsName = `${this.props.className ? (this.props.className + ' ') : ''}`
		return (
			<div {...this.props} className={`${clsName}${wrapperClass}`} >
				{this.props.children}
			</div>
		);
	}
}

export default Draggable;
