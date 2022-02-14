import React from 'react';
export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {
  setHeadComponents([<script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>]);
  setPostBodyComponents([
    <script type="text/javascript" async src="https://cdn.credly.com/assets/utilities/embed.js"></script>
  ]);
};
