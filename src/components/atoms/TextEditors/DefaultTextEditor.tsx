import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';

interface IDefaultTextEditor {
    onEditorChange?: (value: string, editor: TinyMCEEditor) => void;
    label?: string;
    initialValue?: string;
    locale?: string;
    height?: string | number;
    error?: boolean;
    value?: string;
}

const DefaultTextEditor = ({
    onEditorChange,
    label,
    initialValue,
    locale = 'mk_MK',
    height = 300,
    error,
    value,
}: IDefaultTextEditor) => {
    const editorRef = useRef(null);

    // const [editorValue, setEditorValue] = useState<string>('');

    return (
        <>
            <Editor
                apiKey="5o8gomu3kwddk8p96jbfnpr6jg2rnjm1m9z7kxrq0j677oee"
                // onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={initialValue}
                value={value}
                init={{
                    height,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link media image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                        'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    branding: false,
                    language: locale,
                    language_url: '/langs/mk_MK.js',
                }}
                onEditorChange={onEditorChange}
            />
        </>
    );
};

export default DefaultTextEditor;
