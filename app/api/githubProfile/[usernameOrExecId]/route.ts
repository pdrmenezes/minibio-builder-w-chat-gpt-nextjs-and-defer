import { NextRequest, NextResponse } from "next/server";
import generateGitHubProfile from "@/src/defer/generateGitHubProfile";
import { getExecution } from "@defer/client";

type ResponseParamsType = {
  params: {
    usernameOrExecId: string;
  };
};

export async function POST(_request: NextRequest, { params }: ResponseParamsType) {
  const response = await generateGitHubProfile(params.usernameOrExecId);
  return NextResponse.json(response);
}

export async function GET(_request: Request, { params }: { params: { usernameOrExecId: string } }) {
  const resp = getExecution(params.usernameOrExecId);
  return NextResponse.json(resp);
}
