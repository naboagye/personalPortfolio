import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Image = styled.figure`
  ${tw`w-full rounded-lg overflow-hidden mt-4 mb-10`};
`;

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-10`};
`;

export const Repo = styled.button`
  ${tw`text-md border  border-teal-400 rounded-full px-2`};
  width: fit-content;
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-0`};
`;
