import React from "react";
import './directory.style.scss';
import MenuItem from "../menu-item/menu-item.component";


interface Section {
    title: string;
    imgUrl: string;
    size?: string;
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
                },
                {
                    title: 'jackets',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: '2',
                },
                {
                    title: 'sneakers',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: '3',
                },
                {
                    title: 'women',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large',
                    id: '4',
                },
                {
                    title: 'men',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: '5',
                }

            ]

        }
    }

    render(): React.ReactNode {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imgUrl, id, size }) =>
                    (
                        <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />
                    )
                    )
                }
            </div>
        );
    }
}

export default Directory;