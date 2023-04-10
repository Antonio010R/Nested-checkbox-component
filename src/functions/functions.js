export function transform(data, parentId = null) {
  let tree = [];

  data
    .filter((item) => item.parentId === parentId)
    .forEach((item) => {
      let children = transform(data, item.id);
      if (children.length) {
        item.children = children;
      }
      item.checked = false;
      tree.push(item);
    });

  return tree;
}

export const updateParents = (node, nodes, ancestors = []) => {
  if (!node.parentId) {
    return;
  }
  let parent = undefined;
  for (let ancestor of ancestors) {
    const candidates = parent ? parent.children : nodes;
    parent = candidates.filter((nChild) => nChild.id === Number(ancestor))[0];
  }

  if (parent.checked && !node.checked) {
    parent.checked = false;
    ancestors.pop();
    updateParents(parent, nodes, ancestors);
    return;
  }

  if (!parent.checked && node.checked) {
    if (parent.children.every((node) => node.checked)) {
      parent.checked = true;
      ancestors.pop();
      updateParents(parent, nodes, ancestors);
      return;
    }
  }

  return;
};

export const toggleParents = (node) => {
  const checked = node.checked;

  if (node.children) {
    node.children.forEach((nChild) => {
      nChild.checked = checked;
      toggleParents(nChild);
    });
  }
};

export const findNode = (nodes, id, ancestors) => {
  let node = undefined;
  if (ancestors.length === 0) {
    return nodes.filter((node) => node.id === Number(id))[0];
  }

  for (let ancestor of ancestors) {
    const candidates = node ? node.children : nodes;
    node = candidates.filter((node) => node.id === Number(ancestor))[0];
  }
  return node?.children.filter((node) => node.id === Number(id))[0];
};
