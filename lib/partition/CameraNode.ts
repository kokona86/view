import {ITraverser}				from "@awayjs/display/lib/ITraverser";

import {EntityNode}					from "../partition/EntityNode";

/**
 * @class away.partition.CameraNode
 */
export class CameraNode extends EntityNode
{
	/**
	 * @inheritDoc
	 */
	public acceptTraverser(traverser:ITraverser):void
	{
		// todo: dead end for now, if it has a debug sprite, then sure accept that
	}
}