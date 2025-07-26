import { db } from "@/lib/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Save to Firestore in a collection called "submissions"
    const docRef = await db.collection("submissions").add(data);

    return NextResponse.json(
      { message: "Data saved successfully!", docId: docRef.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error saving data:", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
