import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

export const description = "A line chart";

const chartConfig = {
  desktop: {
    label: "Weather",
    color: "var(--chart-2)",
  },
};

export function ChartLineDefault({ chartData }) {
  const [avg, setAvg] = useState("0.0%");
  useEffect(() => {
    if (!chartData || chartData.length < 2) {
      return;
    }
    const increasedValue = () => {
      const original = chartData[1].temp;
      const current = chartData[2].temp;
      const percentage =
        (((current - original) / original) * 100).toFixed(2) + "%";
      setAvg(percentage);
    };
    increasedValue();
  }, [chartData]);

  return (
    <Card>
      <CardHeader className={"p-0"}>
        <p className="text-cards text-white/40">{avg}</p>
      </CardHeader>
      <CardContent className={"p-0"}>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 30,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="temp"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
