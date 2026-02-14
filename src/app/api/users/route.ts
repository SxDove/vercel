import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await pool.execute('SELECT * FROM users ORDER BY id DESC');
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: '获取用户失败' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
    const [result] = await pool.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    const insertResult = result as any;
    const [newUser] = await pool.execute('SELECT * FROM users WHERE id = ?', [insertResult.insertId]);
    const users = newUser as any[];
    return NextResponse.json(users[0]);
  } catch (error) {
    return NextResponse.json({ error: '创建用户失败' }, { status: 500 });
  }
}
