import React from "react";
import './directory.style.scss';
import MenuItem from "../menu-item/menu-item.component";


interface Section {
    title: string;
    imgUrl: string;
    size?: string;
    linkUrl: string;
    id: string;
}

interface DirectoryState {
    sections: Section[];
}

class Directory extends React.Component<{}, DirectoryState> {

    constructor() {
        super({});

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: '1',
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: '2',
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: '3',
                    linkUrl: ''
                },
                {
                    title: 'women',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large',
                    id: '4',
                    linkUrl: ''
                },
                {
                    title: 'men',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: '5',
                    linkUrl: ''
                }
            ]
        }
    }

    render(): React.ReactNode {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherProps}) =>
                    (
                        <MenuItem key={id} {...otherProps} />
                    )
                    )
                }
            </div>
        );
    }
}

export default Directory;