"use client";
import ActionBar from "@/components/common/ActionBar";
import BreadCrumb from "@/components/common/Breadcrumb";
import { Card, List, Typography } from "antd";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div>
      <ActionBar title="Account Profile">
        <BreadCrumb items={[{ label: "Account" }, { label: "Profile" }]} />
      </ActionBar>
      <Card bordered loading={!session}>
        <List>
          <List.Item>
            <Typography.Text strong>Email: </Typography.Text>
            <Typography.Text className="w-3/5">{session?.user?.email}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Role: </Typography.Text>
            <Typography.Text className="w-3/5">Admin</Typography.Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default Profile;
