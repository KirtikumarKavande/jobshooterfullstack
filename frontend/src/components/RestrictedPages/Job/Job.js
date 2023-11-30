import React from "react";

const Job = () => {
  return (
    <div className="flex w-full h-full px-28">
      <div className="w-3/12 border border-black sticky h-full top-0">1</div>
      <div className="w-6/12 border border-black">
        {/* Your content */}
        The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

The interactive example below demonstrates some of the values for align-items using grid layout.
Try it
Syntax

css

/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
/* align-items does not take left and right values */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;

/* Baseline alignment */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alignment (for positional alignment only) */
align-items: safe center;
align-items: unsafe center;

/* Global values */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;

Values

normal

    The effect of this keyword is dependent of the layout mode we are in:

        In absolutely-positioned layouts, the keyword behaves like start on replaced absolutely-positioned boxes, and as stretch on all other absolutely-positioned boxes.
        In static position of absolutely-positioned layouts, the keyword behaves as stretch.
        For flex items, the keyword behaves as stretch.
        For grid items, this keyword leads to a behavior similar to the one of stretch, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like start.
        The property doesn't apply to block-level boxes, and to table cells.

flex-start

    Used in flex layout only, aligns the flex items flush against the flex container's main-start or cross-start side.
flex-end

    Used in flex layout only, aligns the flex items flush against the flex container's main-end or cross-end side.
center

    The flex items' margin boxes are centered within the line on the cross-axis. If the cross-size of an item is larger than the flex container, it will overflow equally in both directions.
start

    The items are packed flush to each other toward the start edge of the alignment container in the appropriate axis.
end

    The items are packed flush to each other toward the end edge of the alignment container in the appropriate axis.
self-start

    The items are packed flush to the edge of the alignment container's start side of the item, in the appropriate axis.
self-end

    The items are packed flush to the edge of the alignment container's end side of the item, in the appropriate axis.
baseline, first baseline, last baseline

    All flex items are aligned such that their flex container baselines align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.
stretch

    If the items are smaller than the alignment container, auto-sized items will be equally enlarged to fill the container, respecting the items' width and height limits.
safe

    Used alongside an alignment keyword. If the chosen keyword means that the item overflows the alignment container causing data loss, the item is instead aligned as if the alignment mode were start.
unsafe

    Used alongside an alignment keyword. Regardless of the relative sizes of the item and alignment container and whether overflow which causes data loss might happen, the given alignment value is honored.

Formal definition
Initial value	normal
Applies to	all elements
Inherited	no
Computed value	as specified
Animation type	discrete
Formal syntax

align-items = 
      </div>
      <div className="w-3/12 border border-black">3</div>
    </div>
  );
};

export default Job;
