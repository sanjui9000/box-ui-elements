// @flow
import * as React from 'react';
import type { Token } from '../../../../../common/types/core';
import MessagePreviewContent from '../common/MessagePreviewContent';
import MessageTextContent from '../common/MessageTextContent';
import MessageTags from '../common/MessageTags';
import MessageFooter from '../common/MessageFooter';
import BottomContentWrapper from '../common/BottomContentWrapper';
import type { PreviewTitleBodyTagsButtonTemplateParams } from '../../../types';

type Props = $Diff<
    {|
        ...PreviewTitleBodyTagsButtonTemplateParams,
        apiHost: string,
        date: Date,
        getToken: (fileId: string) => Promise<Token>,
    |},
    { category: any },
>;

function PreviewTitleBodyTagsButton({
    apiHost,
    date,
    body,
    button1,
    fileUpload: { fileId, sharedLinkUrl } = {},
    getToken,
    tags,
    title,
}: Props) {
    return (
        <div className="PreviewTitleBodyTagsButton">
            <MessagePreviewContent apiHost={apiHost} fileId={fileId} getToken={getToken} sharedLink={sharedLinkUrl} />
            <BottomContentWrapper>
                <MessageTextContent body={body} title={title} />
                <MessageTags tags={tags} />
                <MessageFooter actionItem={button1} date={date} />
            </BottomContentWrapper>
        </div>
    );
}

export default PreviewTitleBodyTagsButton;
