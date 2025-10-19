import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Star, Calendar, Eye } from "lucide-react";

export default function Performance() {
  const reviews = [
    { 
      id: 1, 
      employee: "Sarah Johnson", 
      period: "Q4 2024", 
      rating: 4.5, 
      status: "completed",
      overall: 90,
      goals: 85,
      skills: 95,
      reviewer: "Mike Chen"
    },
    { 
      id: 2, 
      employee: "Mike Chen", 
      period: "Q4 2024", 
      rating: 4.2, 
      status: "completed",
      overall: 84,
      goals: 82,
      skills: 88,
      reviewer: "Emma Wilson"
    },
    { 
      id: 3, 
      employee: "Emma Wilson", 
      period: "Q4 2024", 
      rating: 4.8, 
      status: "completed",
      overall: 96,
      goals: 94,
      skills: 98,
      reviewer: "Sarah Johnson"
    },
    { 
      id: 4, 
      employee: "John Doe", 
      period: "Q4 2024", 
      rating: 0, 
      status: "pending",
      overall: 0,
      goals: 0,
      skills: 0,
      reviewer: "Lisa Anderson"
    },
  ];

  const getRatingBadge = (rating: number) => {
    if (rating >= 4.5) return <Badge className="bg-success text-success-foreground">Excellent</Badge>;
    if (rating >= 4.0) return <Badge className="bg-primary text-primary-foreground">Good</Badge>;
    if (rating >= 3.5) return <Badge className="bg-warning text-warning-foreground">Satisfactory</Badge>;
    return <Badge variant="secondary">Needs Improvement</Badge>;
  };

  const getStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-warning text-warning" : "text-muted"}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Performance Reviews</h2>
        <p className="text-muted-foreground">Track and evaluate employee performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">4.5</div>
            <p className="text-xs text-muted-foreground mt-1">+0.3 from last quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Target className="h-4 w-4 text-success" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">189</div>
            <p className="text-xs text-muted-foreground mt-1">89% completion rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-warning" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">23</div>
            <p className="text-xs text-muted-foreground mt-1">Due this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Star className="h-4 w-4 text-warning" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">34</div>
            <p className="text-xs text-muted-foreground mt-1">Rating 4.5+</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Performance Reviews</CardTitle>
          <CardDescription>Q4 2024 performance evaluation results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{review.employee}</h4>
                      <p className="text-sm text-muted-foreground">
                        Review Period: {review.period} • Reviewer: {review.reviewer}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {review.status === "completed" ? (
                        <>
                          <div className="flex gap-1">{getStars(review.rating)}</div>
                          {getRatingBadge(review.rating)}
                        </>
                      ) : (
                        <Badge variant="outline">Pending Review</Badge>
                      )}
                    </div>
                  </div>

                  {review.status === "completed" && (
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Overall Performance</span>
                          <span className="text-sm font-medium">{review.overall}%</span>
                        </div>
                        <Progress value={review.overall} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Goals Achievement</span>
                          <span className="text-sm font-medium">{review.goals}%</span>
                        </div>
                        <Progress value={review.goals} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Skills & Competencies</span>
                          <span className="text-sm font-medium">{review.skills}%</span>
                        </div>
                        <Progress value={review.skills} className="h-2" />
                      </div>
                    </div>
                  )}

                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
