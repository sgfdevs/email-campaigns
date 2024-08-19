import { Fragment } from 'react';
import * as React from 'react';

export interface NewLinesToBrProps {
    children: string;
}
export const NewLinesToBr = ({ children }: NewLinesToBrProps) => {
    return children.split('\n').map((paragraph, index, arr) => (
        <Fragment key={paragraph}>
            {paragraph}
            {arr.length - 1 !== index ? (
                <>
                    <br />
                    <br />
                </>
            ) : null}
        </Fragment>
    ));
};
