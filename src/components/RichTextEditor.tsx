import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { Bold, Italic, Underline as UnderlineIcon, List, ListOrdered } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const RichTextEditor = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: `<h2>User Data</h2>
      ${userData.map(user => `
        <div>
          <h3>User ID: ${user.id}</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
        </div>
      `).join('<hr/>')}`,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Box maxW="2xl" mx="auto" mt={8}>
      <VStack spacing={4} align="stretch">
        <Heading size="md">Rich Text Editor</Heading>
        
        <ButtonGroup spacing={2}>
          <Button
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            colorScheme={editor.isActive('bold') ? 'blue' : 'gray'}
          >
            <Bold size={16} />
          </Button>
          <Button
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            colorScheme={editor.isActive('italic') ? 'blue' : 'gray'}
          >
            <Italic size={16} />
          </Button>
          <Button
            size="sm"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            colorScheme={editor.isActive('underline') ? 'blue' : 'gray'}
          >
            <UnderlineIcon size={16} />
          </Button>
          <Button
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            colorScheme={editor.isActive('bulletList') ? 'blue' : 'gray'}
          >
            <List size={16} />
          </Button>
          <Button
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            colorScheme={editor.isActive('orderedList') ? 'blue' : 'gray'}
          >
            <ListOrdered size={16} />
          </Button>
        </ButtonGroup>
        
        <Box
          borderWidth={1}
          borderRadius="lg"
          p={4}
          minH="300px"
          sx={{
            '& ul': {
              listStyleType: 'disc',
              pl: 6,
              my: 2,
            },
            '& ol': {
              listStyleType: 'decimal',
              pl: 6,
              my: 2,
            },
            '& li': {
              my: 1,
            },
          }}
        >
          <EditorContent editor={editor} />
        </Box>
      </VStack>
    </Box>
  );
};

export default RichTextEditor;