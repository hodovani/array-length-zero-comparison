module.exports = {
        meta: {
          type: 'problem',
          docs: {
            description: 'Warns when comparing array length to zero',
            category: 'Possible Errors',
            recommended: true,
          },
          fixable: null,
          schema: [], // No configuration options
        },
        create: function (context) {
          return {
            BinaryExpression(node) {
              if (
                node.operator === '===' ||
                node.operator === '!==' ||
                node.operator === '==' ||
                node.operator === '!='
              ) {
                if (
                  (node.left.type === 'MemberExpression' &&
                    node.left.property.name === 'length') ||
                  (node.right.type === 'MemberExpression' &&
                    node.right.property.name === 'length')
                ) {
                  if (
                    (node.left.type === 'Literal' && node.left.value === 0) ||
                    (node.right.type === 'Literal' && node.right.value === 0)
                  ) {
                    context.report({
                      node,
                      message: 'You can use utils/array.js > isEmpty.',
                    });
                  }
                }
              }
            },
          };
        },
      };
  